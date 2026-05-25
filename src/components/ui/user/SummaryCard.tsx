export default function SummaryCard({ cardTitle, detail }) {
  return (
    <div className="bg-white p-8 border-l-4 border-primary-dark shadow-sm">
      <p className="nav-link text-[10px] text-secondary mb-2 uppercase">
        {cardTitle}
      </p>
      <h3 className="font-display text-[32px] text-primary-dark">{detail}</h3>
    </div>
  );
}
