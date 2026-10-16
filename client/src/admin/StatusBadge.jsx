// Status colours follow handout Section 7.2: Active = green, Trial = blue, Suspended = red
const styles = {
  Active: 'bg-green-100 text-success',
  Trial: 'bg-blue-100 text-info',
  Suspended: 'bg-red-100 text-danger',
};

export default function StatusBadge({ status }) {
  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${styles[status] || 'bg-gray-100 text-muted'}`}>
      {status}
    </span>
  );
}
