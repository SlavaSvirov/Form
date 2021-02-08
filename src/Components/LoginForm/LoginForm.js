import React, { Component } from "react";
import { Input, Button } from "antd";
import cn from "classnames";
import styles from "./styles.module.css";
import entry from "../../img/entry.png";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    console.log(this.state.email);
    console.log(this.state.password);
  };

  handleReset = () => {
    console.log("reset");
  };

  render() {
    return (
      <form className={styles.form}>
        <h2>Sign In</h2>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={entry} alt={"entry"}></img>
          <img className={styles.image} src={entry} alt={"entry"}></img>
          <img className={styles.image} src={entry} alt={"entry"}></img>
          <img className={styles.image} src={entry} alt={"entry"}></img>
          <img className={styles.image} src={entry} alt={"entry"}></img>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelName}>
            E-mail
            <p className={styles.inputWrapper}>
              <i className={cn(styles.icon, "fas fa-user")}></i>
              <Input
                placeholder="example@yandex.ru"
                className={styles.formControl}
                name="email"
                value={this.state.email}
                onChange={this.handleUserInput}
                autoComplete="off"
              />
            </p>
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.labelName}>
            Password
            <p className={styles.inputWrapper}>
              <i className={cn(styles.icon, "fas fa-key")}></i>
              <Input
                className={styles.formControl}
                name="password"
                value={this.state.password}
                onChange={this.handleUserInput}
              />
            </p>
          </label>
        </div>
        <Button className={styles.button} onClick={this.handleClick}>
          Sign in
        </Button>
        <Button className={styles.button} onClick={this.handleReset}>
          Reset
        </Button>
      </form>
    );
  }
}

export default LoginForm;
