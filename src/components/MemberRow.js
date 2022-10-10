import React from "react";

const MemberRow = ({index, member}) => {
    return (<div>{member.id + ": " +member.firstName }</div>);
}

export default MemberRow;
