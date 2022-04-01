
export default function Hero (props){
  const Logo= {
    src: "url(./1.jpg)"
  }
return(
<section>
        <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-2 fw-bold lh-1">{props.myName}</h1>
        <p className="display-5">
         {props.title}
        </p>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src={require('./1.jpg')} alt="" height="500" width="420"/>
      </div>
    </div>
  </div>
    </section>
)





}