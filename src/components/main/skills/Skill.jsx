const Skill = ({ skill }) => {
  return (
    <div className="w-[45%] flex items-center text-md">
      <div className="text-2xl lg:text-3xl mb-2 mr-2 lg:mr-4 dark:text-purple text-blue">
        {skill.icon}
      </div>
      <div className="mb-2 text-lg lg:text-xl">{skill.text}</div>
    </div>
  );
};

export default Skill;
