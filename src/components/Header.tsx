import { Typography } from 'antd'
import { headerStyles, textStyles } from '@/styles/styles'
import { Header as AntHeader } from 'antd/es/layout/layout'
import router from 'next/router'

const Header = () => {
  const { Text } = Typography

  return (
    <AntHeader style={headerStyles}>
      <Text onClick={() => router.push('/')} style={textStyles}>
        MSD Assignment
      </Text>
    </AntHeader>
  )
}

export default Header
