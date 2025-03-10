"use client";

const projects = [
  {
    id: 1,
    title: "Urbanbase",
    image: "/images/logo_ub.png",
    width: 19,
    height: 19,
  },
  {
    id: 2,
    title: "Life Secretary",
    image: "/images/logo_ls.png",
    width: 19,
    height: 19,
  },
  {
    id: 3,
    title: "Ref Mate",
    image: "/images/logo_rm.png",
    width: 17,
    height: 17,
  },
];

export default function ProjectNavigation({
  selectedProjectId,
  onClickProjectCubeButton,
}) {
  return (
    <>
      {projects.map((project) => (
        <button
          key={project.id}
          className={`w-8 h-8 flex justify-center items-center rounded-md border ${selectedProjectId === project.id ? "bg-white border-white scale-125" : "bg-white/70 border-gray"} cursor-pointer`}
          onClick={() => onClickProjectCubeButton(project.id)}
        >
          <img
            src={project.image}
            alt={project.title}
            width={project.width}
            height={project.height}
          />
        </button>
      ))}
    </>
  );
}
