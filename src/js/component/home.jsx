
import { element } from "prop-types";
import React from "react";
import { useState } from "react";
//include images into your bundle


//create your first component


const Home = () => {
	const [task, setTask] = useState(``)
	const [taskList, setTaskList] = useState([])

	const handleChange = (event) => {
		setTask(
			event.target.value

		)
	}

	const handleTask = (event) => {
		if (event.key == `Enter`) {
			setTaskList([
				...taskList,
				task
			])
			setTask("")
		}

	}

	const deleteTask = (id) => {
		const newTaskList = taskList.filter((item, index) => id != index)
		setTaskList(newTaskList)
	}


	return (
		<>
			<body>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6  bigDiv   bgDiv2 position-absolute top-0 start-40 translate-middlex silhouette">

							<h1 className="d-flex justify-content-center">To Do List </h1>
							<div className="form-group mt-3 card border-dark-subtle">

								<input

									type="text"
									className="form-control border border-0 p-3 letterType fs-2 textColor"
									placeholder="A Task yo would like to add"
									name="task"
									value={task}
									onChange={handleChange}
									onKeyDown={handleTask}


								/>
								<div className="row">
									<div className="col-12 taskListMap">
										{
											taskList.map((item, index) => {

												return (
													<h3 className="p-3 mt-4 mb-4 border border-2 border-dark-subtle letterType textColor "
														onClick={() => deleteTask(index)}>{item}<span className="icon-delete" >x</span></h3>
														
												)
												
											}
											)

										}
									</div>
									
									<div>

										<p className="textColor">{taskList.length == 0 ? "You don't have more task" : taskList.length} Task to do </p>
										

									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</>
	);
};

export default Home;
