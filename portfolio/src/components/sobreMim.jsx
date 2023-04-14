import { Col, Image, Row, Typography } from 'antd';
import mariana from '../img/Mariana.png';
import Cards from './cards';

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
							color: '#69707a',
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
							boxShadow: '8px 8px 0 #5d6b76',
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
							color: '#c3cad2',
							letterSpacing: '1.5px',
						}}>
						Desenvolvedora
						<br /> Web FullStack
					</Typography.Title>
				</Col>
			</Row>
			<Row
				style={{ marginTop: 80, marginBottom: 40 }}
				justify='space-evenly'>
				<Col
					flex='auto'
					align='middle'
					style={{ position: 'relative' }}>
						<Typography.Title
						className='experiencia'
							level={3}
							style={{ color: '#4f5d6a', textAlign: 'center' }}>
							PROJETOS
						</Typography.Title>
				</Col>
			</Row>
			<Row>
				<Col flex='auto' align='middle'>
					<Cards />
				</Col>
			</Row>
			<Row flex='auto'style={{ background: '#1e1f24', width: '100%', margin: 0 }}>
				<Col flex='auto'>1 1 200px</Col>
				<Col flex='auto'>0 1 300px</Col>
			</Row>
		</>
	);
}

export default SobreMim;
