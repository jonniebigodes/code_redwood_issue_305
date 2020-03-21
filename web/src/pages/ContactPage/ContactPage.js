import {
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

/* const ContactPage = () => {
  return (
    <div>
      <h1>ContactPage</h1>
      <p>Find me in ./web\src\pages\ContactPage\ContactPage.js</p>
    </div>
  )
} */

/* const ContactPage = (props) => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit}>
        <label htmlFor="name" style={{ display: 'block' }}>
          Name
        </label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block ' }}
        />
        <FieldError name="name" style={{ color: 'red' }} />
        <label htmlFor="email" style={{ display: 'block' }}>
          Email
        </label>
        <TextField
          name="email"
          validation={{ required: true }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block ' }}
        />
        <FieldError name="email" style={{ color: 'red' }} />
        <label htmlFor="message" style={{ display: 'block' }}>
          message
        </label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block ' }}
        />
        <FieldError name="message" style={{ color: 'red' }} />
        <Submit style={{ display: 'block' }}>Save</Submit>
      </Form>
    </BlogLayout>
  )
} */
/*
const ContactPage = (props) => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label
          name="name"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block ' }}
        />
        <FieldError name="name" style={{ color: 'red' }} />
        <Label
          name="email"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^\.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block ' }}
        />
        <FieldError name="email" style={{ color: 'red' }} />
        <Label
          name="message"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block ' }}
        />
        <FieldError name="message" style={{ color: 'red' }} />
        <Submit style={{ display: 'block' }}>Save</Submit>
      </Form>
    </BlogLayout>
  )
} */
const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: ContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = (props) => {
  const [create] = useMutation(CREATE_CONTACT)

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label
          name="name"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block ' }}
        />
        <FieldError name="name" style={{ color: 'red' }} />
        <Label
          name="email"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^\.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block ' }}
        />
        <FieldError name="email" style={{ color: 'red' }} />
        <Label
          name="message"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }}
        >
          message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          style={{ display: 'block ' }}
        />
        <FieldError name="message" style={{ color: 'red' }} />
        <Submit style={{ display: 'block' }}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
