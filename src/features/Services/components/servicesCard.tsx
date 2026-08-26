"use client";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function ServicesCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <div className="services-item-inner">

      {/* ICON */}
      <div className="icon">
        <i className={icon}></i>
      </div>

      {/* TITLE */}
      <h4>{title}</h4>

      {/* DESCRIPTION */}
      <p>{description}</p>

    </div>
  );
}