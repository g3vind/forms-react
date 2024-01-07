# FORMS USE CASES

## For Users

- Registering
- Logging In
- Making Purchases
- Appointments

## For Developers

- handling form data
- enforcing validation
- providing visual feedback i.e. error messages
- data submission

# What is React Hook Form

- library for dealing with forms in react

## why?

- manage form data
- submit form data
- validation
- error msgs

`npm install react-hook-form`

1. useForm() - a custom hook basically

## Managing Form State

- every form has a few moving parts that keeps changing from the time the user loades form and submit it.

i.e.
(a) current value of a field in the form
(b) whether a field has been interacted with
(c) whethe a field's value has been changed
(d) whether the form is invalid
(e) whether fields contains errors

- ALL ABOVE ARE COLLECTIVLEY CALLED FORM STATE

## Representing Form State

Using Objects i.e. key-value pairs
{
values:{}
visited:{}
errors:{}
isValid:boolean
}

e.g.
import {useForm} from "react-hook-form"

const form = useForm()

const {register} = form

now, replace `name` of input to {...register("name attribute")}
e.g. <label htmlFor="email">Username</label>
<input tpye="text" {...register("email")}/>

## FORM VALIDATION

react-hook-form supports html validation rules like

- required
- minLength & maxLength
- min & max
- regex pattern etc

## noValidate prop in fields to stop browser validation allowing react-hook-form validation in the form element itself
