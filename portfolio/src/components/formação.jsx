import { Card, Col, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style/formação.css';

export default function contato() {
	return (
		<Content>
			<Row
				justify='space-evenly'
				align='middle'
				id='section2'>
				<Col align='middle'>
					<Typography.Title
						level={3}
						style={{
							color: '#282425',
							position: 'relative',
							textAlign: 'center',
						}}>
						FORMAÇÃO
					</Typography.Title>
				</Col>
				<Col>
					<div style={{ display: 'flex', gap: 80, marginBottom: 50 }}>
						<Card
							title='Bacharel'
							bordered={false}>
							<h4>Enfermagem</h4>
							<p>mar/2017 | jan/2022</p>
						</Card>
						<Card
							title='Trybe'
							bordered={false}>
							<h4>Desenvolvimento Web</h4>
							<p>jul/2022 | atualmente</p>
						</Card>
					</div>
					<div>
						<Card
							title='Outros cursos'
							bordered={false}
							style={{ width: 'auto' }}>
							<p>
								Operador de Suporte Técnico em TI - <strong>SENAI</strong>
							</p>
							<br />
							<p>
								UX/UI designer e Desenvolvimento Front End -
								<strong>Origamid</strong>
							</p>
						</Card>
					</div>
				</Col>
			</Row>
		</Content>
	);
}
