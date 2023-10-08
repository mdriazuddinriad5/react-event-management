
const Service = ({ service }) => {
    const { id, name, price, image, short_description } = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 h-96 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_description}</p>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;