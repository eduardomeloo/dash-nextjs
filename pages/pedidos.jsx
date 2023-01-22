import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '../data/data.js'
const pedidos = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between px-4 pt-4'>
                <h2>Pedidos</h2>
                <h2>Welcome Back, Eduardo</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>Pedido</span>
                        <span className='sm:text-left text-right'>status</span>
                        <span className='hidden md:grid'>Último Pedido</span>
                        <span className='hidden sm:grid'>Forma</span>
                    </div>
                    <ul>
                        {data.map((pedido, id) => (
                            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className='flex'>
                                    <div className='bg-purple-100 p-3 rounded-lg'>
                                        <FaShoppingBag className='text-purple-800' />
                                    </div>
                                    <div className='pl-4'>
                                        <p className='text-gray-800 font-bold'>R${pedido.total.toLocaleString()}</p>
                                        <p className='text-gray-800 text-sm'>{pedido.name.first}</p>
                                    </div>
                                </div>
                                <p className='text-gray-600 sm:text-left text-right'>
                                    <span className={
                                        pedido.status == 'Processando' ? 'bg-green-200 p-2 rounded-lg' : 
                                        pedido.status == 'Finalizado' ? 'bg-blue-200 p-2 rounded-lg' :
                                        'bg-yellow-200 p-2 rounded-lg' 
                                    }>{pedido.status}</span>
                                </p>
                                <p className='hidden md:flex'>{pedido.date}</p>
                                <div className='sm:flex hidden justify-between items-center'>
                                    <p>{pedido.method}</p>
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default pedidos