// import Component3D from "../components/3DComponent";
// import Image from "next/image";

function Projects(){
    return(
        <div className="w-full h-full flex flex-row items-center justify-center">
            <div className="w-[80vw] grid grid-cols-3 gap-4">
                <div className="p-12 bg-[var(--bg3)] rounded-xl w-[100%] h-[20rem] relative">
                        {/* <Component3D
                        width="100%"
                        height="70%"
                        innerStuff={
                            <Image src="/test.jpeg" alt="My pfp" style={{ borderRadius: "1rem",position:"absolute"}} fill />
                        }
                        className="absolute"
                        angle={10}
                        /> */}
                    <h1 className="text-2xl">Some Project</h1>
                </div>

            </div>
        </div>
    );
}

export default Projects;