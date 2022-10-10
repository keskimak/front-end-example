import React, {useState, useEffect} from "react";
import dao from "../ajax/dao";
import MemberListItem from "../components/MemberListItem";

const MemberListView = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // ...do something ONLY when component did mount
        // Notice: even if categories state change => not fired
        async function refreshMembers () {
            const data = await dao.fetchMembers();
            setMembers(data);
        }
        refreshMembers();
    },[]);

    useEffect(() => {
        // ...do something when 1. component did mount
        // 2. categories state changes
    },[members]);

    return (
        <>
        <h3>Members</h3>
        <div>
            {members && members.length>0 ? 
                members.map((item)=>
                    <MemberListItem    key={item.id} 
                                    id={item.id} 
                                    member={item} />
            ) : "no members yet"
        }
        </div>
        </>
    );
    }
export default MemberListView;