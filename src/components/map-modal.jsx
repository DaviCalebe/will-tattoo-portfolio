import * as Dialog from '@radix-ui/react-dialog';
import close from '../assets/close2.png'

const MapModal = ({ children }) => {
  return (
    <Dialog.Root>
    <Dialog.Trigger asChild className='cursor-pointer'>
        {children}
    </Dialog.Trigger>

    <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-black/85"/>

        <Dialog.Close asChild>
            <img src={close} alt="close"
                className="absolute right-2.5 top-2.5 z-[110] inline-flex size-8 appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none cursor-pointer"
                aria-label="Close"
            />
        </Dialog.Close>

        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 h-[80vh] w-[80vw] rounded-md bg-black border border-primary p-2 shadow-[var(--shadow-6)] focus:outline-none">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.9370403190483!2d-34.91574514999999!3d-8.107893550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1ef869a41849%3A0x37190fa435b75b3a!2sR.%20Jean%20Emile%20Favre%2C%20559%20-%20Ipsep%2C%20Recife%20-%20PE%2C%2051200-060!5e0!3m2!1spt-BR!2sbr!4v1776973324032!5m2!1spt-BR!2sbr"
                className="w-full h-full rounded-md"
                loading="lazy"
                allowFullScreen
            />
        </Dialog.Content>
    </Dialog.Portal>
    </Dialog.Root>
  )
}

export default MapModal
