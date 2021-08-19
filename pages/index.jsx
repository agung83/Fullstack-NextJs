
import Layout from '../components/Layout'
import Info from '../components/content/Info'
import Header from 'components/Header'
import Introppdb from 'components/content/IntroPpdb'
import Section from 'components/content/Section'



const Home = () => {
  return (
    <Layout title="PPDB SUMATERA BARAT">

      <Header />

      <div className="bg-white  p-5 rounded-3xl  mb-5 shadow-2xl ">

        <section className="py-5 bg-white mb-10  rounded-3xl">
          <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center text-center ">
              <p className="mt-2 text-2xl leading-5 font-extrabold tracking-tight text-blue-500  sm:text-4xl">
                Informasi Pendaftar PPDB
              </p>
              <p className="mt-4 mb-5 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                accusamus quisquam.
              </p>
            </div>

            <Info />
          </div>
        </section>


        <Introppdb />



        <Section />


      </div>

    </Layout >
  )
}

// export async function getServerSideProps(context) {
//   console.log(context)
// }


export default Home
