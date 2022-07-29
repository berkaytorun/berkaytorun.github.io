import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Button from '@material-ui/core/Button';
import '../styles/Experience.css';

function Experience() {
	return (
		<div className='experience'>
			<VerticalTimeline lineColor='#3e497a'>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='02/2021 - 10/2021'
					iconStyle={{ background: '#21e9e9', color: '#fff' }}
					icon={<WorkIcon />}
					position={'right'}>
					<h3 className='vertical-timeline-element-title'>Software Developer</h3>
					Insider, Istanbul Turkey
					<br />
					<text style={{ fontWeight: '600' }}>Exchange Study </text>
					<p>
						Performed quality assurance and integration testing for projects after development was completed
						and before projects are deployed
						<br />
						Collaborated with a team of developers, customer support, and clients on software projects of
						all sizes
						<br />
						Analyzed usage data, feedback, and performance reports improving user experiences
						<br />
						Took requirements from design through to implementation independently
						<br />
						Designed and developed software applications using JavaScript, Html, CSS, Jquery, Ajax, SQL,
						Docker, Nodejs, Git
						<br />
						Working at the management of outsource teams as a technical support and development assistance
						throughout partner integration
					</p>
					<div className='button-container'>
						{['Js', 'Html', 'CSS', 'Jquery', 'Ajax', 'SQL', 'Docker', 'Nodejs', 'Git'].map((element) => {
							return (
								<Button size='small' className='techstack'>
									{element}
								</Button>
							);
						})}
					</div>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='01/2019 - 07/2019'
					iconStyle={{ background: '#27e7be', color: '#fff' }}
					icon={<SchoolIcon />}
					position={'left'}>
					<h3 className='vertical-timeline-element-title'>Jönköping University</h3>
					Jönköping, Sweden
					<br />
					<text style={{ fontWeight: '600' }}>Exchange Study </text>
					<p>Courses: Android Development, Server-side Web development, and Agile project </p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='01/2019 - 07/2019'
					iconStyle={{ background: '#21e9e9', color: '#fff' }}
					icon={<WorkIcon />}
					position={'right'}>
					<h3 className='vertical-timeline-element-title'>Intern</h3>
					Natro Hosting, Istanbul Turkey
					<br />
					<text style={{ fontWeight: '600' }}>Exchange Study </text>
					<p>
						Developing responsive e-mail templates
						<br />
						Working on a project of low-code e-mail templates builder on a website using MJML framework
					</p>
					<div className='button-container'>
						{['Html', 'Css', 'Js'].map((element) => {
							return (
								<Button size='small' className='techstack'>
									{element}
								</Button>
							);
						})}
					</div>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--education'
					date='08/2016 - 01/2021'
					iconStyle={{ background: '#27e7be', color: '#fff' }}
					icon={<SchoolIcon />}
					position={'left'}>
					<h3 className='vertical-timeline-element-title'>Istanbul Kultur University</h3>
					Istanbul, Turkey
					<br />
					<text style={{ fontWeight: '600' }}>Bachelor’s of Computer Engineering</text>
					<p>
						Graduated with a 2.78/4.00 GPA
						<br />
						Thesis: Game Development On Unity INTE-2020 Page: 372-376
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}

export default Experience;
