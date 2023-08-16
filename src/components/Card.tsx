import { Avatar, Divider, Row, Space, Typography } from 'antd'
import {
  cardStyles,
  titleStyles,
  chartWrapperStyles,
  chartBottomRowStyles,
  iconWrapperStyles,
} from '@/styles/styles'
import { CommentOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  isLiked?: boolean
  onLikeClick?: () => void
  children: ReactNode
}

const Card = ({ title, isLiked, onLikeClick, children }: CardProps) => {
  const { Text, Title } = Typography

  return (
    <article style={cardStyles}>
      <Title level={3} style={titleStyles}>
        {title}
      </Title>

      <Divider />

      <div style={chartWrapperStyles}>{children}</div>

      <Divider />

      <Row justify="space-between" align="middle" style={chartBottomRowStyles}>
        <Avatar
          size="small"
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        />

        <Text type="secondary">
          <Space size="small" style={iconWrapperStyles}>
            {isLiked ? (
              <HeartFilled onClick={onLikeClick} />
            ) : (
              <HeartOutlined onClick={onLikeClick} />
            )}{' '}
            3
            <CommentOutlined />
          </Space>
        </Text>
      </Row>
    </article>
  )
}

export default Card
