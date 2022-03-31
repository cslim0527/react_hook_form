import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";

export default function Home() {
  return (
      <form className={styles.form}>
        <label>Example</label>
        <input name="example" defaultValue="test"  />
        <label>ExampleRequired</label>
        <input
            name="exampleRequired"
            // ref={register({ required: true, maxLength: 10 })}
        />
        {/*{errors.exampleRequired && <p>This field is required</p>}*/}
        <input type="submit" />
      </form>
  )
}
