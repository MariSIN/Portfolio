import { Card, Col, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style/formação.css';

export default function contato() {
	return (
		<Content>
			<Row justify='center' align='start'>
				<Typography.Title
					level={3}
					style={{ color: '#282425', width: 300, marginRight: 50 }}>
					FORMAÇÃO
				</Typography.Title>
				<Col>
					<Card
						title='Bacharel'
						bordered={false}
						style={{ width: 300, background: '#010101' }}>
						<h4>Enfermagem</h4>
						<p>mar/2017 | jan/2022</p>
					</Card>
				</Col>
                <Col>
					<Card
						title='Trybe'
						bordered={false}
						style={{ width: 300, background: '#010101' }}>
						<h4>Desenvolvimento Web</h4>
						<p>jul/2022 | atualmente</p>
					</Card>
				</Col>
			</Row>
                <Row justify='space-evenly' align='start'>
                    <Col></Col>
                    <Col>
                    <Typography style={{ textAlign: 'left', width: 650, marginTop: -60 }}>
                    <h4>Outros cursos</h4>

                        <span>Operador de Suporte Técnico em TI - SENAI</span>
                        <span>UX/UI designer e Desenvolvimento Front End - Origamid</span>
                    </Typography>
                    </Col>
                    
                </Row>
		</Content>
	);
}
