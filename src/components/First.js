import React, { Component,Fragment} from 'react';

const First =prop=>{
    return (
        <Fragment>
        <div>
        {prop.arr}
        </div>
        </Fragment>
    );
}

export default First;