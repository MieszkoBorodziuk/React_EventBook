import React, { Component } from 'react';
import '../Styles/sass/addevent.sass';



class AddEvent extends Component {
    state = {
        value: '',
        checked: true,
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toISOString().slice(11, 8),
    }

    handleChange = (e) => {

        if (e.target.type === "text") {
            this.setState({
                value: e.target.value
            }
            )
        } else if (e.target.type === "checkbox") {
            this.setState({
                checked: !this.state.checked
            }
            )
        } else if (e.target.type === "date") {
            this.setState({
                date: e.target.value
            }
            )
        } else if (e.target.type === "time") {
            this.setState({
                time: e.target.value
            }
            )
        }
    }

    handleClick = () => {
        const { value, checked, date, time } = this.state;
        if (value.length && date.length && time.length > 0) {
            this.props.add(value, date, time, checked);
            this.setState({
                value: '',
                checked: true,
                date: new Date().toISOString().slice(0, 10),
                time: new Date().toISOString().slice(11, 8),
            })
        } else
            alert("Uzupelnij pola");
    }

    render() {
        return (
            <div className="addevent-Bcontainer">
                <h2 className="addevent_title">Utwórz nowe Wydarzenie</h2>
                <div className="addevent_image">Rysunek</div>
                <div className="addevent-Scontainer">
                    <label>Dodaj zdjęcie</label>
                    <input type="file" name="addevent_addimage_btn"></input>
                    <label>Nazwa wydarzenia</label>
                    <input placeholder="Nazwa wydarzenia" value={this.state.value} onChange={this.handleChange}></input>
                    <label htmlFor="date">Data rozpeczecia</label>
                    <input type="date" value={this.state.date} min={this.state.date} onChange={this.handleChange}></input>
                    <label htmlFor="time" >Godzina rozpoczecia</label>
                    <input type="time" value={this.state.time} onChange={this.handleChange}></input>
                    <label htmlFor="date">Data zakaczenia</label>
                    <input type="date" value={this.state.date} min={this.state.date} onChange={this.handleChange}></input>
                    <label htmlFor="time" >Godzina zakaczenia</label>
                    <input type="time" value={this.state.time} onChange={this.handleChange}></input>
                    <label htmlFor="lokazlization">Miejsce wydarzenia</label>
                    <input type="lokalization"></input>
                    <label htmlFor="public">Publiczne</label>
                    <input type="checkbox" checked={this.state.checked} id="public" onChange={this.handleChange}></input>
                    <div className="addevent_type">
                        <div>rozrywka</div>
                        <div>sport</div>
                        <div>podróze</div>
                        <div>gry</div>
                    </div>
                    <button className="confirm_addevent_btn" onClick={this.handleClick}>Dodaj</button>
                </div>
            </div>
        );
    }
}


export default AddEvent;