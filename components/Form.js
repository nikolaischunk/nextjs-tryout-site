const FormComponent = () => {
  return (
    <div className="form_componment ">
      <div className="form_one">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="name"
              placeholder="e.g Nikolai Schunk"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. contact@schunk.dev"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="Password" />
          </div>
        </div>

        <div className="field is-grouped is-grouped-right">
          <p className="control">
            <a className="button is-primary">Submit</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
