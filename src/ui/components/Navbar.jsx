import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { providers } from 'ethers';
import Web3Modal from 'web3modal';

export const Navbar = () => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [address, setAddress] = useState("0x");
    const web3ModalRef = useRef();

    const connectWallet = async () => {
        try {
            // Get the provider from web3Modal, which in our case is MetaMask
            // When used for the first time, it prompts the user to connect their wallet
            await getProviderOrSigner();
            setWalletConnected(true);
        } catch (err) {
            console.error(err);
        }
    };

    const disconnectWallet = async () => {
        await web3ModalRef.current.clearCachedProvider();
        setWalletConnected(false);
        setAddress("0x");
    }

    const getProviderOrSigner = async (needSigner = false) => {
        // Connect to Metamask
        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);

        // If user is not connected to the Goerli network, let them know and throw an error
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 5) {
            window.alert("Change the network to Goerli");
            throw new Error("Change network to Goerli");
        }
    
        const signer = web3Provider.getSigner();
        setAddress(await signer.getAddress());
        if (needSigner) {
            return signer;
        }
        return web3Provider;
    };

    useEffect(() => {
        // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
        if (!walletConnected) {
            // Assign the Web3Modal class to the reference object by setting it's `current` value
            // The `current` value is persisted throughout as long as this page is open
            web3ModalRef.current = new Web3Modal({
                network: "goerli",
                providerOptions: {},
                disableInjectedProvider: false,
            });
        }
    }, [walletConnected]);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-prussian-blue px-3">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Logo
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`}
                        to="/candidates"
                    >
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-table-list me-2"></i>Candidatos
                        </div>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`}
                        to="/vote"
                    >
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-person-booth me-2"></i>Votar
                        </div>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`}
                        to="/results"
                    >
                        <div className='d-flex align-items-center'>
                            <i className="fa-solid fa-square-poll-vertical me-2"></i>Resultados
                        </div>
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }`}
                        to="/add-candidate"
                    >
                        <div className='d-flex align-items-center'>
                        <i className="fa-solid fa-user-plus me-2"></i>Agregar
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-white'>
                        {
                            !walletConnected ? (
                                <button className='btn btn-primary' onClick={connectWallet}>Conectar</button>
                            ) : (
                                <div className='d-flex align-items-center'>
                                    <i className="fa-solid fa-user me-2"></i>{address.substring(0,4)+'...'+address.substring(address.length - 4,address.length)}
                                    <button
                                        className='nav-item nav-link btn ms-2'
                                        onClick={disconnectWallet}
                                    >
                                        <i className="fa-solid fa-right-from-bracket me-2 text-danger"></i>Logout
                                    </button>
                                </div>
                            )
                        }
                    </span>
                </ul>
            </div>
        </nav>
    )
}