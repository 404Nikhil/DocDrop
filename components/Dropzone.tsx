"use client";

import DropzoneComponent from "react-dropzone";

function Dropzone() {
    const maxSize = 20971520;

    return (
        <DropzoneComponent 
            minSize={0} 
            maxSize={maxSize} 
            onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps,
               getInputProps, 
               isDragActive, 
               isDragReject, 
               fileRejections,
            }) => {
                const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
                return (
                    <section className="flex justify-center items-center h-screen border-white bg-red-600 text-white">
                        <div {...getRootProps()}>
                            <input {...getInputProps()} className="text-white"/>
                            {!isDragActive && "Click here or drop a file to upload!"}
                            {isDragActive && !isDragReject && "Drop it like it's hot!"}
                            {isDragReject && "File type not accepted, sorry!"}
                            {isFileTooLarge && (
                                <div className="text-danger mt-2">File is too large.</div>
                            )}
                        </div>
                    </section>
                );
            }}
        </DropzoneComponent>
    );
}

export default Dropzone;
