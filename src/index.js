import React from 'react';
import ReactDom from 'reactdom';

var App = React.createClass({
    render: function () {
        var CpName = "DuYi";
        return (
            <div>
                <span>{CpName}</span>
                <ul>
                {
                    this.props.data.map(function (ele, index) {
                        return <li key = {index + 100}>{ele}</li>;
                    })
                }
                </ul>
            </div>
        )
    }
})
