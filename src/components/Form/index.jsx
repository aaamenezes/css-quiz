import { useRouter } from 'next/router'
import styled from 'styled-components'
import Input from '../Input/Index'
import Button from '../Button/Index'

const Form = styled.form`
  display: block;
`

export default function FormWrapper(props) {

  const router = useRouter()

  return (
    <Form
      onSubmit={event => {
      event.preventDefault()
      router.push(`/quiz?name=${props.name}`)
    }}>

      <Input setName={props.setName} />
      <Button name={props.name} pretext={true} text="Vamos jogar!" />

    </Form>
  )
}