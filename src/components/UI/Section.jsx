export default function Section({ bg = "none", tight = false, children, divider = false }) {
    const bgCls = bg === "sand" ? "bg-sand-soft texture"
              : bg === "olive" ? "bg-olive-tint"
              : "";
    const pad = tight ? "section-tight" : "section";
    const div = divider ? "divider-top" : "";
    return <section className={`${bgCls} ${pad} ${div}`}>{children}</section>;
  }
  