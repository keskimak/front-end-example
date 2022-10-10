import React, {useState, useEffect} from "react";
import {Link, useParams } from "react-router-dom";
import dao from "../ajax/dao";

const MemberDetailsView = () => {
    const [member, setMember] = useState({});
    const {memberId} = useParams();

    useEffect(() => {
        async function getMember () {
            const data = await dao.fetchOneMemberyById(memberId);
            setMember(data);
        }
        getMember();
    },[memberId]);

    return(
        <div>
            <h1>Details of a Member</h1>

            { member && member.id !== undefined ?
            <dl>
                <dt>Member Id: {member.id}</dt>
                <dd>Full name: {member.firstName} {member.lastName}</dd>
                   <dd>Email: {member.email}</dd>
             
            </dl>
            : "Still downloading the member"
            }
            <nav>
                <Link to="/member">Back to list</Link>
            </nav>            
        </div>

    );
}

export default MemberDetailsView;
