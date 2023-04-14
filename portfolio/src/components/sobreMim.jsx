import { Col, Image, Row, Typography } from 'antd';
import mariana from '../img/Mariana.png';
import Cards from './cards';
import Formação from './formação';

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
						}}>
						Mariana Nascimento
					</Typography.Title>
					<Image
						src={mariana}
						alt='mariana'
						width={400}
						style={{
							borderRadius: '15px',
							boxShadow: '8px 8px 0 #fd92aecd',
							transform: 'skew(-5.5deg) scale(1)',
							transformOrigin: 'left top',
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
						}}>
						Desenvolvedora
						<br /> Web FullStack
					</Typography.Title>
				</Col>
			</Row>
			<Row>
				<Col
					flex='auto'
					align='middle'>
					<Cards />
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
