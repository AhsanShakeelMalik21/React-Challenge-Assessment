import {Link} from "react-router-dom";
import Logo from '../Images/logohere.png'

function UserCard(props){

    return (
        <Link
            to = {{
                pathname: "/User",
                state :{
                    name : 'ahsan',
                    id : props.item.id
                }    
            }
            }
            className={"card-margin align-left is-row is-card"}
        >

            <div className="is-50">
                <div className="image-container">
                    <img className="card-logo" src={Logo} alt="Logo" />
                </div>
            </div>
            <div className="is-50">
                <h3>
                    {props.item.firstName} - {props.item.lastName}
                </h3>
            </div>

        </Link>
    );
}

export default UserCard
