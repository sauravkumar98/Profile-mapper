
import { Link } from 'react-router-dom';
import './ProfileCard.css';
import profile from "../../assets/profile.jpg"
import people from "../People"
function ProfileCard({ name, description, image }) {

  return (
   <>
    {people.map((person, index) => (
      <div className="profile-card" key={index}>
        <img src={person.profile} alt={person.name} />
        <div className="name">{person.name}</div>
        <div className="description">{person.job}</div>
        <Link to={"/summary"}>  <button  className="summary-button">Summary</button></Link>
    
      </div>
    ))}
    </>
    //  <div className="profile-card">
    //   <img src={profile} alt={`${name}`} />
    //   <div className="name">{name}</div>
    //   <div className="description">{description}</div>

    //   <Link to={"/summary"}>  <button  className="summary-button">Summary</button></Link>
    
    // </div>
    
  );
}

export default ProfileCard;
