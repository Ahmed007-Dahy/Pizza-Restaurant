function LoaderLayout() {
    return (
        <div
            className={
                'absolute inset-0 z-10 flex h-screen w-full items-center justify-center bg-teal-600/50 backdrop-blur-sm'
            }
        >
            <div className={'loader'}></div>
        </div>
    );
}

export default LoaderLayout;
