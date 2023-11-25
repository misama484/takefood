

function RegisterPage() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Register
      </h1>
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          Or register with</div>
        <button>Google</button>
        <div className="my-4 text-center text-gray-500">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </section>
  )
}

export default RegisterPage