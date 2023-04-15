import { LinkedinOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';

export default function contato() {
	return (
		<Content>
			<Row
				justify='center'
				align='middle'
				style={{ marginTop: 50 }}
				id='section3'>
				<Typography.Text style={{ fontSize: 27, marginRight: 50, width: 500 }}>
					Estou disponível para novos projetos no momento. Entre em contato
					comigo e marcamos uma conversa 👋
				</Typography.Text>
				<Col>
					<Typography.Text style={{ fontSize: 25 }}>
						<h4 style={{ color: '#f4235a' }}>email:</h4>
						mariana.sn.silva@gmail.com
					</Typography.Text>
				</Col>
				<Col>
					<Typography.Link
						href='https://www.linkedin.com/in/mariana-nascimento-dev/'
						style={{ fontSize: 25 }}>
						<h4 style={{ color: '#f4235a' }}>LinkedIn <LinkedinOutlined />
                        :</h4> Mariana Dev
					</Typography.Link>
				</Col>
				<Col>
					<Typography.Link
						href='https://api.whatsapp.com/send?phone=5522999358678&text=Ol%C3%A1,%20vi%20o%20seu%20portf%C3%B3lio.%20Estou%20entrando%20em%20contato%20com%20voc%C3%AA%20para%20n%C3%B3s%20conversarmos.'
						style={{ fontSize: 25 }}>
						<h4 style={{ color: '#f4235a' }}>Cell:</h4> Link WhatsApp
					</Typography.Link>
				</Col>
			</Row>
		</Content>
	);
}
