import { Col, Image, Row, Typography } from 'antd';
import { BsCircleFill, BsFillSuitHeartFill } from 'react-icons/bs';
import mariana from '../img/Mariana.png';
import Formação from './formação';
import Projetos from './projetos';

function SobreMim() {
	return (
		<>
			<Row
				justify='middle'
				style={{ height: '80vh' }}>
				<Col
					flex={4}
					align='middle'>
					<Typography.Title
						level={2}
						style={{
							textAlign: 'center',
							fontFamily: 'Dancing Script',
							color: '#F0396A',
							letterSpacing: '2px',
							position: 'relative',
						}}>
						<span>
							Mariana Nascimento
							<BsFillSuitHeartFill
								style={{
									left: 680,
									bottom: 20,
									rotate: '55deg',
									fontSize: 20,
								}}
							/>
						</span>
					</Typography.Title>
					<Image
						src={mariana}
						alt='mariana'
						width={400}
						style={{
							borderRadius: '15px',
							boxShadow: '8px 8px 0 #fd92aecd',
						}}
					/>
				</Col>
				<Col flex={2}>
					<Typography.Title
						level={1}
						style={{
							textAlign: 'left',
							color: '#F0396A',
							letterSpacing: '1.5px',
							zIndex: 1,
							position: 'relative',
						}}>
						Desenvolvedora
						<br /> Web FullStack
						<span style={{ position: 'absolute', zIndex: -1, right: 235  }}>
							<BsCircleFill
								style={{
									fontSize: 90,
									color: 'EB91A9',
								}}
							/>
							<BsCircleFill
								style={{
									fontSize: 50,
									color: 'pink',
								}}
							/>
						</span>
					</Typography.Title>
				</Col>
			</Row>
			<Row>
				<Col
					flex='auto'
					align='middle'>
					<Projetos />
				</Col>
			</Row>
			<Row
				flex='auto'
				style={{ background: '#131212', width: '100%', margin: 0 }}>
				<Col flex='auto'>
					<Formação />
				</Col>
			</Row>
		</>
	);
}

export default SobreMim;
