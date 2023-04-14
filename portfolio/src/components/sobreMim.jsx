import { Card, Col, Divider, Image, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import mariana from '../img/Mariana.png';

function SobreMim() {
	return (
		<>
			<Row justify='middle'>
				<Col
					flex={4}
					align='middle'>
					<Typography.Title
						level={2}
						style={{
							textAlign: 'center',
							filter: 'drop-shadow(1px 1px 12px #b37feb)',
							fontFamily: 'Bad Script',
							color: '#8046EB',
							letterSpacing: '2px',
						}}>
						Mariana Nascimento
					</Typography.Title>
					<Image
						src={mariana}
						alt='mariana'
						width={350}
						style={{
							borderRadius: '15px',
							boxShadow: '1px 1px 10px #2E1C6B',
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
							fontFamily: 'Edu TAS Beginner',
							filter: 'drop-shadow(1px 1px 25px #b37feb)',
							color: '#8A4BEB',
							letterSpacing: '1.5px',
						}}>
						Desenvolvedora
						<br /> Web FullStack
					</Typography.Title>
				</Col>
			</Row>
			<Row
				style={{ marginTop: '80px' }}
				justify='space-evenly'>
				<Col
					flex='auto'
					align='middle'>
					<Typography.Title
						level={3}
						style={{ color: '#D4CFE8' }}>
						EXPE
						<br />
						RIÊN
						<br />
						CIA
					</Typography.Title>
				</Col>
				<Col flex='800px'>
					<Content>
						<Typography.Text style={{ letterSpacing: '0.8px' }}>
							Em 2022 passei por uma transição de carreira e hoje sou
							desenvolvedora fullstack. <br />
							Possuo projetos em:Javascript, React.js, Typescript e Node.js.{' '}
							<br />
							Estou constantemente aprendendo mais sobre:
							<br />
							Javascript, Typescript, React, node.js, ux/ui design, testes de
							integração, testes unitários, CSS e também estou em busca de
							aprender novas tecnologias.
						</Typography.Text>
                        <br />
						<a href='https://github.com/MariSIN/recipe-app'>
							<Card
								title='App de Receitas'
								bordered={false}
								style={{
									width: 500,
									marginTop: 40,
									color: '#8674A8',
								}}>
                                
								<p style={{ fontSize: 14 }}>
									Este projeto é um app de receitas que foi desenvolvido em
									grupo e com React: Hooks e Context API A base de dados são 2 APIs
									distintas, uma para comidas e outra para bebidas. O layout tem
									como foco dispositivos móveis, mas tem design responsivo para
									telas maiores também.
								</p>
							</Card>
						</a>
					</Content>
				</Col>
			</Row>
			<Divider orientation='left'>Raw flex style</Divider>
			<Row>
				<Col flex='1 1 200px'>1 1 200px</Col>
				<Col flex='0 1 300px'>0 1 300px</Col>
			</Row>

			<Row wrap={false}>
				<Col flex='none'>
					<div
						style={{
							padding: '0 16px',
						}}>
						none
					</div>
				</Col>
				<Col flex='auto'>auto with no-wrap</Col>
			</Row>
		</>
	);
}

export default SobreMim;
