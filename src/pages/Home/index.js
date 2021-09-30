//import { useEffect, useState } from "react";

import Business from "../Sections/Business";
import Health from "../Sections/Health";
import Sports from "../Sections/Sports";

import { SubColumns, LargeColumn, SmallColumn, Row } from "../../themes/base";

const Home = () => {
  return (
    <>
      <Row>
        <LargeColumn>
          <Business />
        </LargeColumn>
        <SmallColumn>
          <Health />
        </SmallColumn>
      </Row>
      <Row>
        <SubColumns>
          <SmallColumn>
            <Sports />
          </SmallColumn>
        </SubColumns>
      </Row>
    </>
  );
};

export default Home;
