export default function SkillsProgress(props) {
  const progressbar = props.list2.map((item, id) => {
    return (
      <div key={id}>
        <p>{item.topic}</p>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{width: item.persntage}}
            aria-valuenow={item.valuenow}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {item.persntage}
          </div>
        </div>
      </div>
    );
  });

  return <div>{progressbar}</div>;
}
