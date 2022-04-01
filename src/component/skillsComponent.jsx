import AnotherSkills from "./anotherSkillsComponent";
import SkillsProgress from "./skillsProgress";

export default function Skills(props) {
  return (
    <div class="container py-5 bg-dark text-white my-5">
      <div className="col">
        <h1 className="text-center">Skills</h1>
        <p className="text-center">
          {props.skillsText}
        </p>

         <div class="row align-items-center  px-5 py-5">    
           <div className="col-2"></div> 
           <div className="col-4"><AnotherSkills/></div>
           <div className="col-5"><SkillsProgress list2={props.list}/></div>   
         </div>

      </div>
    </div>
  );
}
