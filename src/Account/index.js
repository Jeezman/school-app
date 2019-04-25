import React from "react";
import AccountSidebar from "./AccountSidebar";
import { Route, Switch } from "react-router-dom";
import { generateLoadableComponent } from "../utils";
const links = [
  { label: "Payout Method", url: "/users/account", page: "PayoutPage" },
  {
    label: "Transaction History",
    url: "/users/transactions/orders",
    page: "TrackingTransaction"
  },
  {
    label: "Your Earnings",
    url: "/users/transactions/revenue",
    page: "TrackingTransaction"
  },
  { label: "Security", url: "/accounts/password/change", page: "SecurityPage" }
];

const Account = () => (
  <div className="main-block">
    <div className="container row-space-top-4 row-space-4">
      <div className="row">
        <AccountSidebar links={links} />
        <div className="col-sm-9 col-xs-12">
          <Switch>
            {links.map((link, index) => (
              <Route
                index={index}
                path={link.url}
                render={({ match }) => {
                  const LazyComponent = generateLoadableComponent({
                    loader: () => import(`./Pages/${link.page}`)
                  });
                  return <LazyComponent match={match} />;
                }}
              />
            ))}
          </Switch>
        </div>
      </div>
    </div>
    <div
      className="modal fade"
      id="payment_form"
      tabindex="-1"
      role="dialog"
      aria-labelledby="payment_form"
    >
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">
              Add Payment Method
            </h4>
          </div>
          <form
            id="payForm"
            action="/users/account/"
            method="post"
            className="smart-forms"
            novalidate=""
          >
            <div className="modal-body">
              <div id="errorMessage" />
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value="nGCo3Ai2rQW5ZtUFRWuBfvPJwqfs0WrW"
              />
              <div className="row row-space-4">
                <div className="col-xs-6">
                  <div className="form-group">
                    <label className="control-label">Payment Type</label>
                    <select
                      className="form-control"
                      id="id_payout_type"
                      name="payout_type"
                      data-parsley-id="5444"
                    >
                      <option value="1" selected="selected">
                        Bank Transfer
                      </option>
                    </select>
                    <span className="help-block" id="parsley-id-5444" />
                  </div>
                </div>
                <div className="col-xs-6">
                  <div id="account_sec" className="form-group">
                    <label className="control-label">Account No. (NUBAN)</label>
                    <input
                      placeholder="10-digit number"
                      className="form-control"
                      id="id_account_id"
                      maxlength="10"
                      name="account_id"
                      pattern="\d{10}"
                      required="true"
                      type="text"
                      data-parsley-id="0061"
                    />
                  </div>
                </div>
                <div id="other-bank-details">
                  <div className="col-xs-6">
                    <label className="control-label">Account Name</label>
                    <input
                      placeholder="Account name"
                      className="form-control"
                      id="id_account_name"
                      maxlength="70"
                      name="account_name"
                      required="true"
                      type="text"
                      data-parsley-id="5294"
                    />
                  </div>
                  <div className="col-xs-6">
                    <label for="" className="control-label">
                      Select Bank
                    </label>
                    <select
                      className="form-control"
                      id="id_bank"
                      name="bank"
                      required="true"
                      data-parsley-id="2824"
                    >
                      <option value="" selected="selected">
                        Select Bank
                      </option>
                      <option value="Citibank">Citibank</option>
                      <option value="Access Bank">Access Bank</option>
                      <option value="Diamond Bank">Diamond Bank</option>
                      <option value="Ecobank Nigeria">Ecobank Nigeria</option>
                      <option value="Enterprise Bank">Enterprise Bank</option>
                      <option value="Fidelity Bank Nigeria">
                        Fidelity Bank Nigeria
                      </option>
                      <option value="First Bank of Nigeria">
                        First Bank of Nigeria
                      </option>
                      <option value="First City Monument Bank">
                        First City Monument Bank
                      </option>
                      <option value="First Inland Bank">
                        First Inland Bank
                      </option>
                      <option value="Guaranty Trust Bank">
                        Guaranty Trust Bank
                      </option>
                      <option value="Heritage Bank">Heritage Bank</option>
                      <option value="Keystone Bank Limited">
                        Keystone Bank Limited
                      </option>
                      <option value="Mainstreet Bank">Mainstreet Bank</option>
                      <option value="Skye Bank">Skye Bank</option>
                      <option value="Stanbic IBTC Bank">
                        Stanbic IBTC Bank
                      </option>
                      <option value="Standard Chartered Bank">
                        Standard Chartered Bank
                      </option>
                      <option value="Sterling Bank">Sterling Bank</option>
                      <option value="Union Bank of Nigeria">
                        Union Bank of Nigeria
                      </option>
                      <option value="United Bank for Africa">
                        United Bank for Africa
                      </option>
                      <option value="Unity Bank">Unity Bank</option>
                      <option value="Wema Bank">Wema Bank</option>
                      <option value="Zenith Bank">Zenith Bank</option>
                      <option value="Jaiz Bank">Jaiz Bank</option>
                      <option value="Suntrust Bank">Suntrust Bank</option>
                      <option value="Providus Bank">Providus Bank</option>
                      <option value="Parallex Bank">Parallex Bank</option>
                    </select>
                    <span className="help-block" id="parsley-id-2824" />
                  </div>
                </div>
              </div>
              <div className="well bg-info">
                This is where we pay you when you earn money from teaching or if
                you request a refund as a client. You can withdraw your funds
                from your Tuteria wallet into your bank account at any time.
                <br />
                <br />
                <span style={{ color: "red" }}>PS</span>: Please write
                correctly, you won't be able to edit this information except by
                calling us.
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                id="payoutButton"
                type="submit"
                data-loading-text="Submitting..."
                className="btn btn-primary"
              >
                Add Payment Option
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

/**<div className="row">
    <AccountSidebar />
    <div className="col-sm-9 col-xs-12">

      <div className="panel panel-default row">
        <div className="panel-heading"><h4>Payout Details</h4></div>
        <div className="panel-body mp-box">

          <div className="col-sm-12">
            <div className="row">

              <div className="col-sm-6">

                <h4>Guaranty Trust Bank</h4>
                <p>Abiola Oyeniyi (0003543556)</p>

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>;*/
export default Account;
