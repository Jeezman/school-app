import React from "react";
import { Col as Column, Hidden } from "react-grid-system";
import { ApplicationTooltip as Tooltip } from "../../components/simple/Tooltip";
export { ApplicationTooltip } from "../../components/simple/Tooltip";
const LinkedinImport = () => (
  <Hidden xs sm>
    <Column md={12} lg={4}>
      <Tooltip heading="Have a LinkedIn Account?" hasLinkedinButton>
        <span>
          Let’s save you the stress! We can get most of these information from
          LinkedIn if you have an account.
        </span>
        <br />
      </Tooltip>
    </Column>
  </Hidden>
);

export default LinkedinImport;
