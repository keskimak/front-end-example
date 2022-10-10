import React from "react";
import MemberRow from "./MemberRow";
import { Link } from "react-router-dom";

const MemberListItem = ({member}) => {
    return (
        <Link to={`/member/${member.id}`}>
                <MemberRow member={member} />
        </Link>
    );
}

export default MemberListItem;
