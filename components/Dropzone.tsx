"use client";
import { cn } from "@/lib/utils";
import DropzoneComponent from "react-dropzone";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { db } from "@/firebase";
import { addDoc, serverTimestamp, collection } from "@firebase/firestore";
import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateDoc, doc } from "firebase/firestore";

function Dropzone() {
    const [loading, setLoading] = useState(false);
    const {isLoaded, isSignedIn, user} = useUser();
    const onDrop = (acceptedFiles: File[])=> {
        acceptedFiles.forEach((file) => {
                const reader = new FileReader();
                reader.onabort = () => console.log("file reading was aborted");
                reader.onerror = () => console.log("file reading has failed");
                reader.onload = async () => {
                    await uploadPost(file);
            };
            reader.readAsArrayBuffer(file);

        });
    };
        const maxSize = 20971520;
        const uploadPost = async(selectedFile: File) => {
            if(loading) return;
            if(!user) return;
            setLoading(true);
            const docRef = await addDoc(collection(db, "users",  user.id, "files" ),{
            userId : user.id,
            filename: selectedFile.name,
            fullName: user.fullName,
            profileImg: user.imageUrl,
            timestamp: serverTimestamp(),
            type: selectedFile.type,
            size: selectedFile.size,
        }    
            )
            const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

            uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc (db, "users", user.id, "files", docRef.id), {
                downloadURL: downloadURL,
            });
            });

            setLoading(false); 

        }

    return (
        <DropzoneComponent 
            minSize={0} 
            maxSize={maxSize} 
            onDrop={onDrop}>
            {({ getRootProps,
               getInputProps, 
               isDragActive, 
               isDragReject, 
               fileRejections,
            }) => {
                const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
                return (
                    <section className="m-8">
                        <div {...getRootProps()}
                        className=
                            "w-full h-52 p-5 border-dashed border-2 border-white rounded-lg flex justify-center items-center cursor-pointer"
                        >
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
