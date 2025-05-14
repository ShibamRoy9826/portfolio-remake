// import Component3D from "../components/3DComponent";
import ProjectCard from "@/components/projectCard";

function Projects(){
    return(
        <div className="w-full h-full flex flex-row items-center justify-center">
            <div className="w-[80vw] grid grid-cols-3 gap-8 pb-24">
                <ProjectCard
                    projectName="Some Project"
                    projectDesc="This is a cool project, hope you like it..."
                    projectImgSrc="/test.jpeg"
                />

                <ProjectCard
                    projectName="Some Project"
                    projectDesc="This is a cool project, hope you like it..."
                    projectImgSrc="/test.jpeg"
                />

                <ProjectCard
                    projectName="Some Project"
                    projectDesc="This is a cool project, hope you like it..."
                    projectImgSrc="/test.jpeg"
                />

                <ProjectCard
                    projectName="Some Project"
                    projectDesc="This is a cool project, hope you like it..."
                    projectImgSrc="/test.jpeg"
                />
                <ProjectCard
                    projectName="Some Project"
                    projectDesc="This is a cool project, hope you like it..."
                    projectImgSrc="/test.jpeg"
                />

                <ProjectCard
                    projectName="Some Project"
                    projectDesc="This is a cool project, hope you like it..."
                    projectImgSrc="/test.jpeg"
                />

                <ProjectCard
                    projectName="Some Project"
                    projectDesc="This is a cool project, hope you like it..."
                    projectImgSrc="/test.jpeg"
                />
            </div>
        </div>
    );
}

export default Projects;