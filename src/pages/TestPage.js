import React from 'react';
import { connect } from 'react-redux';


const TestPage = ({
    tempId
}) => {


    return (<div>
    <h1>Temp Page</h1>

        <br />
        <body>
            <b> Temp ID: {tempId}</b>
        </body>
    </div>
    );
}

const mapState = ({ core }) => ({
    tempId: core.tempId
  });

  export default connect(mapState)(TestPage);