interface Props {
  name: string;
}

function Badge({ name }: Props) {
  return (
    <div className="bg-primary-100 text-primary-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-primary-400 border border-primary-400">
      {name}
    </div>
  );
}

export default Badge;
