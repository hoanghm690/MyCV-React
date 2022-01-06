import { useState } from "react";
import styles from "./Project.module.scss";
import Heading from "../Heading";
import Card from "../Card";
import Dialog from "../Dialog";
import resumeData from "../../utils/resumeData";

export default function Project() {
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Heading
                    first={"m"}
                    second={"y best projects"}
                    bg={"linear-gradient(to right bottom, #6723c5, #d23ff0)"}
                />
                <div className={styles.content}>
                    {resumeData.projects.map((project, index) => (
                        <div
                            key={index}
                            className={styles.item}
                            onClick={() => setProjectDialog(project)}
                        >
                            <Card
                                title={project.title}
                                img={project.image}
                                titleBtn={"View more"}
                            />
                        </div>
                    ))}

                    <Dialog
                        show={projectDialog}
                        onClose={() => setProjectDialog(false)}
                        title={projectDialog.title}
                        description={projectDialog.description}
                        image={projectDialog.image}
                    />
                </div>
            </div>
        </div>
    );
}