
type TechStackCardProps = {
    tech: {
        icon: string;
        title: string;
        description: string;
    };
}

export default function TechStackCards(props : TechStackCardProps) {
    // * props destructuring
    const { tech } = props;

  return (
    <div className="techstack-item padd-15">

      <div className="techstack-item-inner">

        {/* ================= ICON ================= */}
        <div className="icon">
          <i className={tech.icon}></i>
        </div>

        {/* ================= TITLE ================= */}
        <h4>{tech.title}</h4>

        {/* ================= DESCRIPTION ================= */}
        <p>{tech.description}</p>

      </div>

    </div>
  );
}